import {Header} from '../components/Header'
export function Hero({}){
    return (
        <>
        <div className='bg-gradient-to-r from-gray-50 to-green-50 h-screen flex flex-col items-center'>
            <Header />
            <div className="flex justify-center h-screen">
                <div className="flex flex-col justify-center">
                    <div className="text-center max-w-4xl">
                        <div className='font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 py-2 my-2'>
                            Revolutionize Road Safety with RoadRadar
                        </div>
                        <div className='text-2xl font-sans'>Discover the Future of Road Maintenance Technology. Experience the Power of Real-time Data Collection and Government Collaboration.</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}