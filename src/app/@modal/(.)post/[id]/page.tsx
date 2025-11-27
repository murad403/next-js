"use client"
import { useParams } from 'next/navigation'

const CurrentPost = () => {
    const { id } = useParams();
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl max-w-2xl w-full mx-4 p-8 relative">
                <h2 className="text-3xl font-bold">Post ID: {id}</h2>
                <p className="mt-6 text-lg">এটা মডালে দেখাচ্ছে! URL: /post/{id}</p>
                <p className="mt-6 text-gray-600">ব্যাকগ্রাউন্ডে হোম পেজ আছে। ব্যাক করলে বা X চাপলে চলে যাবে।</p>
            </div>
        </div>
    )
}

export default CurrentPost
