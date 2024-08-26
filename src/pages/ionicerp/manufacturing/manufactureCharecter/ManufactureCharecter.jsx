import { charecter } from "./charecter";

const ManufactureCharecter = () => {
    return (
        <div className=" py-5">
              <section className="text-center pb-5">
                <h1 className="text-3xl font-bold">আপনার উৎপাদনের জন্য "আইওনিক ইআরপি" বিজনেস ম্যানেজমেন্ট সফটওয়্যার এর বৈশিষ্ট্য নিচে দেওয়া হল-</h1>
                
            </section>

            <section>
                <div className="grid grid-cols-2 text-center gap-8">
                    {
                        charecter.map((charecter,index) =>{
                            return <div key={index}>
                                <h1 className="font-bold text-xl">{charecter.title}</h1>
                                <hr className="border-[2px] my-3" />
                                <p className="text-lg text-[#777777]">{charecter.description}</p>

                            </div>
                        })
                    }
                </div>

            </section>

            
        </div>
    );
};

export default ManufactureCharecter;