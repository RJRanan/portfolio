import { githubBlack, linkedinBlack, emailBlack } from "../assets/icons";

const Footer = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col items-center justify-center w-full max-w-[494px] ">
        <p className="text-sm">
          © 2024 Renz Jestoni Ranan. All Rights Reserved{" "}
        </p>
        <div className="flex justify-between items-center gap-4 mt-4">
          <a href=" https://github.com/RJRanan">
            <img src={githubBlack} className="  mobile:h-7 mobile:w-7" alt="" />
          </a>

          <a href="https://www.linkedin.com/in/rjranan/">
            {" "}
            <img
              src={linkedinBlack}
              className="   mobile:h-7 mobile:w-7"
              alt=""
            />
          </a>

          <a href="mailto:renzjranan@gmail.com">
            <img src={emailBlack} className=" mobile:h-6 mobile:w-6" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
