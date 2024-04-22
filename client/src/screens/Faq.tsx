import { Header } from "../components/Header"
export function Faq(){

    return(
        <div className='bg-gradient-to-r from-gray-50 to-green-50 flex flex-col items-center overflow-auto h-screen'>
            <Header />
            <section className="py-10  sm:py-16 lg:py-24 h-screen">
                <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Questions & Answers</h2>
                        <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-slate-600">Explore the common questions and answers</p>
                    </div>

                    <div className="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-16 gap-x-20">
                        <div className="flex items-start">
                            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-600 rounded-full">
                                <span className="text-lg font-semibold text-white">1</span>
                            </div>
                            <div className="ml-4">
                                <p className="text-xl font-semibold text-black">What is the main purpose and objective of the project?</p>
                                <p className="mt-4 text-base text-slate-600">Our objective is to make a prototype system to detect pothole on the roads and the aim is to prevent accidents and Monitor roads at a minimal cost.</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-600 rounded-full">
                                <span className="text-lg font-semibold text-white">2</span>
                            </div>
                            <div className="ml-4">
                                <p className="text-xl font-semibold text-Black">What major problems does your project solve?</p>
                                <p className="mt-4 text-base text-slate-600">Potholes are responsible for a lot of accidents occurring across the nation. So detecting them using our prototype and repairing the roads help prevent a major part of them and save many lives.</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-600 rounded-full">
                                <span className="text-lg font-semibold text-white">3</span>
                            </div>
                            <div className="ml-4">
                                <p className="text-xl font-semibold text-black">What is the working model of the project?</p>
                                <p className="mt-4 text-base text-slate-600">The ultrasonic sensor detects any potential pothole on the road and sends the information to be processed to the Arduino board from the where the data is passed through the ESP - 32 and the server to the  computer for further processes.</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-600 rounded-full">
                                <span className="text-lg font-semibold text-white">4</span>
                            </div>
                            <div className="ml-4">
                                <p className="text-xl font-semibold text-black">Are there any alternatives for this approach and How does this differentiate itself?</p>
                                <p className="mt-4 text-base text-slate-600">Yes there are few other alternatives like manual patrolling on the roads,  using drones, cameras and machine learning. But those methods aren't quite economical as this approach.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}