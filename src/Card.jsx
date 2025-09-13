function Card({ img, title, desc, tags }) {
    return (
        <div className="max-w-[280px] px-3 py-3 rounded overflow-hidden shadow-lg m-2 bg-yellow-200">
            <img className="w-full h-80 object-cover" src={img} alt="" />
            <div className="px-2 py-1">
                <div className="font-bold text-sm mb-1">{title}</div>
                <p className="text-gray-700 text-xs">
                    {desc}
                </p>
            </div>
            <div className="px-2 pt-1 pb-1">
                {tags.map((tag, idx) => (
                    <span key={idx} className="inline-block bg-gray-200 rounded-full px-2 py-0.5 text-xs font-semibold text-gray-700 mr-1 mb-1">
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default Card