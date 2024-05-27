import Wrapper from "../components/Wrapper";
import Image from "next/image";

const AuthPage = () => {
  return (
    <main>
      <Wrapper>
        <section className=" flex">
          <form action="" className="w-1/2 flex justify-center items-center">
            <section>Login</section>
          </form>
          <div className="w-1/2">
            <Image
              src="/assets/login-fixam.png"
              alt=""
              height={1080}
              width={1080}
            />
          </div>
        </section>
      </Wrapper>
    </main>
  );
};

export default AuthPage;
