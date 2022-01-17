const Footer = () => <section className="section-4 has-text-centered container">
    <small>© Alberto Alonso Portfolio 2022 👨🏻‍💻</small>
</section>

Footer.Wrapper = ({ children }) => <>
    {children}
    <Footer />
</>

export default Footer