"use client";
import Container from "./Container";
import FooterList from "./FooterList";

const Footer = () => {
  return (
    <Container primary>
      <footer className="px-10 md:px-14 lg:px-20 flex flex-col md:flex-row justify-between border-t pt-4">
        <FooterList title="Simple Smile" items={["about", "faq"]} />
        <FooterList title="Navigation" items={["blog", "services"]} />
        <FooterList social title="Support" items={["facebook", "twitter"]} />
      </footer>
    </Container>
  );
};

export default Footer;
