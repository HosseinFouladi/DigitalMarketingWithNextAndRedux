import Head from "next/head";
import {
  Address,
  AddressContainer,
  BackgroundImage,
  Container,
  FormContainer,
  GuideButton,
  Hello,
  Icon,
  IconContainer,
  Paragraph,
  RegisterContianer,
  RegisterSection,
  RightSection,
  SiteName,
  Title,
} from "../../styles/register/Register.style";
import Image from "next/image";
import MarketingIcon from "../../public/Sale.png";
import LoginForm from "../form/LoginForm";
import Link from "next/link";
import Backimg from "../../public/images/Web 1920 – 1@2x.png";
const Register = ({ type, submitForm }) => {
  return (
    <div>
      <Head>
        <title>{type === "login" ? "صفحه ورود به سایت" : "صفحه ثبت نام"}</title>
        <meta name="description" content="Generated by create next app" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:ital@1&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/Shop.ico" />
      </Head>
      <Container>
        <BackgroundImage>
          <Image src={Backimg} layout="fill" />
          <RegisterContianer>
            <RegisterSection>
              <IconContainer>
                <SiteName>فروشگاه اینترنتی</SiteName>
              </IconContainer>
              <Title>
                {type === "login" ? "ورود به سایت" : "ثبت نام در سایت"}
              </Title>
              <FormContainer>
                <LoginForm type={type} submitForm={submitForm}></LoginForm>
              </FormContainer>
              <AddressContainer>
                <Address>hosseinfouladi20@gmail.com</Address>
              </AddressContainer>
            </RegisterSection>
            <RightSection>
              <Paragraph>
                {type === "login"
                  ? "لطفا اطلاعات شخصی خودتون رو وارد کنید و با ما همراه باشید"
                  : "اگر قبلا ثبت نام کردید وارد صفحه لاگین شده و وارد سایت شوید"}
              </Paragraph>
              <Link href={type === "login" ? "/signup" : "/login"}>
                <GuideButton>
                  {type === "login" ? "ثبت نام" : "ورود"}
                </GuideButton>
              </Link>
            </RightSection>
          </RegisterContianer>
        </BackgroundImage>
      </Container>
    </div>
  );
};
export default Register;
