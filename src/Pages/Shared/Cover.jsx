

const Cover = ({ img, title }) => {
    return (
        <div className="hero h-[700px] w-full" style={{ backgroundImage: `url("${img}")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div style={{ padding: '30px', backgroundColor: 'rgba(21, 21, 21, 0.60)' }} className="max-w-md ">
                    <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                </div>
            </div>
        </div>
    )
}

export default Cover
