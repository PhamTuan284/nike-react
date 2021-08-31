import { memo } from "react";

function AppNike() {
  return (
    <div className="nikeapp mb-5">
      <div class="container">
        <h3 className="nikeapp-header">The Nike App</h3>
      </div>
      <img
        alt="Nike App"
        src="https://static.nike.com/a/images/f_auto/dpr_2.0/w_1213,c_limit/5081996b-dbdb-4bd9-9aa4-23b7c96aa702/nike-app.jpg"
      ></img>
      <div class="container">
        <div class="nikeapp-desc">
          <h3>Your Personal Guide to Greatness</h3>
          <p>
            The Nike App has everything you need to get moving. That means the
            latest <br /> gear, engaging stories and a worldwide community. It’s
            all here, <br />
            personalized for you.
          </p>
        </div>
        <img
          alt="Nike App"
          src="https://static.nike.com/a/images/f_auto/dpr_2.0/w_1101,c_limit/258551e2-35e4-4109-895f-7277635a8288/nike-app.jpg"
        />
        <div class="nikeapp-desc">
          <h3>Shop Easier</h3>
          <p>
            Get product recommendations based on what you love and fast, secure
            <br />
            checkout. With 30-day returns, this is a regret-free zone.
          </p>
        </div>
        <img
          alt="Nike App"
          src="https://static.nike.com/a/images/f_auto/dpr_2.0/w_1101,c_limit/f9050949-c9fd-41c6-a74e-238e8b44ca97/nike-app.jpg"
        />
        <div class="nikeapp-desc">
          <h3>Join the Community</h3>
          <p>
            Once you’re in the app, you’re a Nike Member. So you’ll have first
            access to
            <br />
            the latest gear - plus a front-row seat to Nike experiences.
          </p>
        </div>
        <img
          alt="Nike App"
          src="https://static.nike.com/a/images/f_auto/dpr_2.0/w_1101,c_limit/9cf32c13-7a86-4f8a-a515-6e1cbfc31b37/nike-app.jpg"
        />
        <div class="nikeapp-desc">
          <h3>Get the Whole Story</h3>
          <p>
            The Nike App goes deep on the daily. Stay in the know with
            ready-to-use
            <br />
            advice and feature stories on everything from Nike pros to
            neighborhood teams.
          </p>
        </div>
        <img
          alt="Nike App"
          src="https://static.nike.com/a/images/f_auto/dpr_2.0/w_1101,c_limit/f3baa160-6b73-4ed6-9962-fe1bdcce6949/nike-app.jpg"
        />
        <h3 class="nikeapp-header">More Apps From Nike</h3>
        <div class="row">
          <div class="col-md-6 col-12">
            <img
              alt="Nike App"
              src="https://static.nike.com/a/images/f_auto/dpr_2.0/w_543,c_limit/4dfde0f8-4f94-4ebf-87cd-56d60a1dcfb6/nike-app.jpg"
            />
          </div>
          <div class="col-md-6 col-12">
            <img
              alt="Nike App"
              src="https://static.nike.com/a/images/f_auto/dpr_2.0/w_543,c_limit/16e2afe9-7657-4976-8b1f-446fbad97e87/nike-app.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(AppNike);
