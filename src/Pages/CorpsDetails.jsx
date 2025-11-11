import { Link, useLoaderData } from 'react-router';
import InterestForm from '../Components/InterestForm';
import { AuthContext } from '../context/AuthContext';

const CorpsDetails = () => {

    const data = useLoaderData()
    // console.log(data)
    const { name, image, type, quantity, location,
        pricePerUnit, _id, description,owner,   } = data
        

    // const { user } = use(AuthContext)


    return (
        <div className=" bg-linear-to-r from-lime-300 via-black to-amber-300 ">
            <div className="max-w-4xl mx-auto p-4 md:p-6 lg:p-8">
                <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
                    <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
                        <div className="shrink-0 w-full md:w-1/2">
                            <img
                                src={image}
                                alt=""
                                className="w-full object-cover rounded-xl shadow-md"
                            />
                        </div>

                        <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                                {name}
                            </h1>

                            <div className="md:flex space-x-2 gap-3">
                                <div className="badge badge-lg badge-outline text-green-600 border-green-600 font-medium">
                                    {type}
                                </div>

                                <div className="badge badge-lg badge-outline text-green-600 border-green-600 font-medium">
                                    Price: {pricePerUnit}/kg
                                </div>
                                <div className="badge badge-lg badge-outline mt-1 md:mt-0 text-green-600 border-green-600 font-medium">
                                    Stock: {quantity}kg
                                </div>
                            </div>

                            <p className=" leading-relaxed text-base md:text-lg">
                                {description}
                            </p>

                            <div className=" space-y-1 ">
                               <h1 className='text-red-500 text-lg font-semibold'><span className='text-black'>From:</span> {location}</h1>
                               <h4 className='text-blue-600 text-lg font-semibold'> <span className='text-black'>Owner:</span> {owner.ownerName}({owner.ownerEmail})</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* interst */}
            <div className=' grid  md:grid-cols-2 py-5 disabled: bg-amber-100'>
               <div>
                <p className='text-center text-green-600 mb-2 font-semibold md:mt-22 text-2xl md:text-4xl '>Are You Interested To This?</p>
                <p className='text-center font-semibold text-sm md:text-lg'>If You Are Interested,Please Submit Your Interest Here  </p>
                <div className='hidden md:block'>
                    <img className='mx-auto my-7  w-96 rounded-xl' src={'https://i.ibb.co.com/4ZqNk9nn/images-4.jpg'} alt="" />
                <img className='mx-auto w-96 rounded-xl' src={'https://i.ibb.co.com/ccrtPqqT/download-16.jpg'} alt="" />
                </div>
                
               </div>
                
                <InterestForm data={data}></InterestForm>
            </div>
            
        </div>

    );
};

export default CorpsDetails;