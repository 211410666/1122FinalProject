import Wrapper from "../../assets/wrappers/BlogPage_66";

const Signin = () => {

    return (
        <Wrapper>
            <div className="signin-section">
                <div className="section-title"><h2>SignIn</h2></div>
                <div className="signinInput">
                    <section className="userunput-title"><h3>Account</h3></section>
                    <section className="userinput"><input type="text" /></section>
                </div>
                <div className="signinInput">
                    <section className="userunput-title"><h3>passward</h3></section>
                    <section className="userinput"><input type="text" /></section>
                </div>
                <div className="signinInput">
                    <section className="userunput-title"><h3>email</h3></section>
                    <section className="userinput"><input type="text" /></section>
                </div>
                <div className="signinInput">
                    <section className="userunput-title"><h3>gender</h3></section>
                    <div id="radio">
                        <label><input type="radio" name="label" value="M"/><span class="round button">男</span></label>
                        <label><input type="radio" name="label" value="F"/><span class="round button">女</span></label>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Signin;
