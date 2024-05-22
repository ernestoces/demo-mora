import { ref, onBeforeMount } from 'vue';

// Define the type for an article
type Article = {
    cover: string;
    content: any; // Adjust this based on the actual type of content
    title: string;
    slug: string;
};

const query = groq`*[_type == "article"][0..3] {
    "cover": cover.asset->url,
    content,
    title,
    slug
}`;

export default function useArticles() {
    const articles = ref<Article[]>([]); // Initialize as an empty array
    const { data, refresh } = useSanityQuery(query);

    onBeforeMount(() => {
        // When data is available, update the articles
        if (data.value) {
            articles.value = data.value;
        }
    });

    return {
        articles,
        refresh
    };
}