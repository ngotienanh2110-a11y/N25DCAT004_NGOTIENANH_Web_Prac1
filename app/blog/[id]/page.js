export default async function BlodDetail({ params }) {
    const { id } = params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();

    return(
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-sm border mt-10">
                <a href="/" className="text-indigo-600 hover:underline font-semibold text-sm mb-6 inline-block">
                  &larr; back to Blog
                </a>

                <h1 className="text-3xl md:text-4xl font-bold mb-4 capitalize">
                    {post.title}
                </h1>

                <div className="text-sm text-gray-500 mb-6 border-b pb-4">
                    Author: User #{post.userId}
                </div>

                <p className="text-gray-700 leading-relaxed text-lg">
                    {post.body}
                </p>
            </div>
        </div>
    )
}