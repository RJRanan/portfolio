const Contact = () => {
  return (
    <div className="w-full  md:max-w-2xl flex item-center justify-center my-12 mx-auto">
      <div className="w-full max-w-[494px]  flex flex-col gap-8">
        <div className="">
          <h1 className="text-3xl font-bold ">Let&apos;s connect 📞</h1>
        </div>
        <div>
          <p className="font-poppins mobile:text-base text-[14px]  text-wrap text-justify tracking-widest">
            Have a project you&apos;d like to discuss or just want to say hello?
            I&apos;d love to hear from you! Feel free to reach me out. Whether
            it&apos;s about potential collaborations, freelance opportunities,
            or simply saying hello, I&apos;m all ears!
          </p>
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-black text-white px-2 py-2 flex items-center text-base font-poppins border border-1 rounded-lg transition hover:scale-105 hover:duration-500 ">
            <a href="mailto:renzjranan@gmail.com">Let&apos;s Connect!</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
