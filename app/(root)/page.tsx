import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-18 md:p-24 bg-[#333]">
      {/* header */}
      <header className="flex flex-col items-center justify-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-4">JOFFER</h1>
        <p className="text-xl text-white text-center">Your professional matchmaker!</p>
      </header>
      {/* main content */}
      <div className="flex flex-row gap-12 flex-wrap justify-center items-center">
        <div className="flex border md:rounded-[60px] rounded-[40px] flex-col bg-[#d5cccc] md:min-h-[400px] max-h-[610px] min-w-[390px] md:max-w-[590px] px-8 py-12 content-center justify-center items-center">
          <Button variant="outline" className="md:w-[300px] md:h-[80px] min-w-[150px] border rounded-[40px] text-white bg-[#ff7e33] mb-2 font-medium md:text-[24px] px-8 py-6 text-[18px]">Talent</Button>
          <small className="md:text-[18px] text-[14px]">For the ones who seek new job opportunities!</small>
        </div>
        <div className="flex border md:rounded-[60px] rounded-[40px] flex-col bg-[#d5cccc] md:min-h-[400px] max-h-[610px] min-w-[390px] md:max-w-[590px] px-8 py-12 content-center justify-center items-center">
          <Button variant="outline" className="md:w-[300px] md:h-[80px] min-w-[150px] border rounded-[40px] text-white bg-[#5496ee] mb-2 font-medium md:text-[24px] px-8 py-6 text-[18px]">Recruiter</Button>
          <small className="md:text-[18px] text-[14px]">For the ones who seek new talents to work with!</small>
        </div>
      </div>
    </main>
  );
}
