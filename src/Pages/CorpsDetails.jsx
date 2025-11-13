import { Link, useLoaderData, useNavigation } from 'react-router';
import InterestForm from '../Components/InterestForm';
import { AuthContext } from '../context/AuthContext';
import Table from '../Components/Table';
import { use } from 'react';
import Spinner from '../Components/Spinner';

const CorpsDetails = () => {

    const data = useLoaderData()
    // console.log(data)
     const navigation = useNavigation(); 
    const { name, image, type, quantity, location,
        pricePerUnit, _id, description, owner, unit } = data


    const { user } = use(AuthContext)
    // console.log(user)


      if (navigation.state === "loading") {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-lime-100 via-amber-200 to-green-100">
        <Spinner></Spinner>
        <p className="ml-3 text-green-700 font-semibold text-xl">Loading Crop Details...</p>
      </div>
    );
  }

    return (
        <div className=" bg-linear-to-r from-lime-300 via-black to-amber-300 ">
            <div className="max-w-4xl mx-auto p-1 md:p-2 ">
                <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
                    <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
                        <div className="shrink-0 w-full space-y-7  md:w-1/2">
                            <img
                                src={image}
                                alt=""
                                className="w-full md:h-78 object-cover rounded-xl shadow-md"
                            />
                            <div className="divider divider-primary"></div>
                            <div className='bg-gray-200 rounded-lg p-4 text-xl font-semibold text-lime-800 hidden md:block '>100% Authentic, You Can Buy This Without Any doubt!!</div>
                        </div>

                        <div className="flex flex-col  justify-center  space-y-4 w-full md:w-1/2">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                                {name}
                            </h1>

                            <div className="md:flex  space-x-2 md:space-x-0 gap-3">
                                <div className="badge badge-lg badge-outline text-green-600 border-green-600 font-medium">
                                    {type}
                                </div>

                                <div className="badge badge-lg badge-outline text-green-600 border-green-600 font-medium">
                                    Price:{pricePerUnit}/{unit}
                                </div>
                                <div className="badge badge-lg badge-outline mt-1 md:mt-0 text-green-600 border-green-600 font-medium">
                                    Stock:{quantity}{unit}
                                </div>
                            </div>

                            <p className=" leading-relaxed text-base md:text-lg">
                                {description}
                            </p>

                            <div className=" space-y-1 bg-amber-200 p-3 rounded-2xl ">
                                <h1 className='text-red-500 md:text-lg font-semibold'><span className='text-black'>From:</span> {location}</h1>

                                <h4 className='text-blue-600 md:text-lg font-semibold'> <span className='text-black'>Owner:</span> {owner.ownerName} </h4>
                                <span className='text-blue-600 font-semibold text-md'>({owner.ownerEmail})</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* interst or received */}
            <div className='bg-amber-100'>
                {
                    user?.email !== owner?.ownerEmail ?
                        (<div className=' grid  md:grid-cols-2 py-5  '>
                            <div>

                                <p className='text-center text-green-600 mb-2 font-semibold md:mt-22 text-2xl md:text-4xl '>Are You Interested To This?</p>
                                <p className='text-center font-semibold text-sm md:text-lg'>If You Are Interested,Please Submit Your Interest Here  </p>
                                <div className='hidden md:block'>
                                    <img className='mx-auto my-7  w-96 rounded-xl' src={'https://i.ibb.co.com/4ZqNk9nn/images-4.jpg'} alt="" />
                                    <img className='mx-auto w-96 rounded-xl' src={'https://i.ibb.co.com/ccrtPqqT/download-16.jpg'} alt="" />
                                </div>

                            </div>
                            <InterestForm unit={unit} data={data}></InterestForm>

                        </div>) :
                        (<Table unit={unit} _id={_id} data={data}></Table>)



                }

            </div>
        </div>

    );
};

export default CorpsDetails;