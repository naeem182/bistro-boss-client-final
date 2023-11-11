import HEadingTittle from '../Shared/HEadingTittle'
import './Featured.css'
import featuredimg from '../../assets/home/featured.jpg'

const Featured = () => {
    return (
        <div className="Featureditem bg-fixed text-black pt-8 my-20">
            <HEadingTittle subheading="check it out" heading="Featured Item" ></HEadingTittle>
            <div className='md:flex px-16 py-8 gap-4 justify-center items-center bg-slate-500 bg-opacity-60'>
                <div>
                    <img src={featuredimg} alt="" />
                </div>
                <div className="md:ml-10 text-black">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur voluptatibus dolorum iure incidunt. Ut rerum, quam dicta explicabo repellendus, voluptatem eum soluta debitis repellat dolore officia tempora non quis corrupti?</p>
                    <button className='btn btn-outline border-0 border-b-4 mt-4'>read more</button>
                </div>

            </div>
        </div>
    )
}

export default Featured
