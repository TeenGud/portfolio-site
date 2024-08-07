import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import schemas from './sanity/schemas'

const congig = defineConfig({
    projectId: 'tuaxnazv',
    dataset: 'production',
    title: "My Personal Website",
    apiVersion: "2024-08-06",
    basePath: "/admin",
    plugins: [structureTool()],
    schema: {types: schemas}

})
export default congig