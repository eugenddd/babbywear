<template>
  <div>
    <main
      id="MainContent"
      class="content-for-layout focus-none"
      role="main"
      tabindex="-1"
    >

      <div class="normal_main_content page-width">

        <link
          href="//cdn.shopify.com/s/files/1/2713/8608/t/32/assets/page-account.css?v=160686326329420194631643172524"
          rel="stylesheet"
          type="text/css"
          media="all"
        >
        <div class="customer login form-vertical card-block">
          <h1
            id="recover"
            tabindex="-1"
          >
            Reset your password
          </h1>
          <div>
            <p>
              We will send you an email to reset your password
            </p>
            <form
              method="post"
              action="/account/recover"
              accept-charset="UTF-8"
              onsubmit="window.Shopify.recaptchaV3.addToken(this, &quot;recover_customer_password&quot;); return false;"
            ><input
                type="hidden"
                name="form_type"
                value="recover_customer_password"
              ><input
                type="hidden"
                name="utf8"
                value="✓"
              >
              <div class="field">
                <input
                  type="email"
                  value=""
                  name="email"
                  id="RecoverEmail"
                  autocorrect="off"
                  autocapitalize="off"
                  autocomplete="email"
                  placeholder="Email"
                >
                <label for="RecoverEmail">
                  Email
                </label>
              </div>
              <button>
                Submit
              </button>

              <a href="#login">
                Cancel
              </a>
            </form>
          </div>

          <h1
            id="login"
            tabindex="-1"
          >
            Login
          </h1>
          <div>
            <form
              method="post"
              action="/account/login"
              id="customer_login"
              accept-charset="UTF-8"
              novalidate="novalidate"
              onsubmit="window.Shopify.recaptchaV3.addToken(this, &quot;customer_login&quot;); return false;"
            ><input
                type="hidden"
                name="form_type"
                value="customer_login"
              ><input
                type="hidden"
                name="utf8"
                value="✓"
              >
              <div class="field">
                <input
                  type="email"
                  name="customer[email]"
                  id="CustomerEmail"
                  autocomplete="email"
                  autocorrect="off"
                  autocapitalize="off"
                  placeholder="Email"
                >
                <label for="CustomerEmail">
                  Email
                </label>
              </div>
              <div class="field">
                <input
                  type="password"
                  value=""
                  name="customer[password]"
                  id="CustomerPassword"
                  autocomplete="current-password"
                  placeholder="Password"
                >
                <label for="CustomerPassword">
                  Password
                </label>
              </div>

              <a
                href="#recover"
                class="forgot"
              >
                Forgot your password?
              </a><button class="btn">
                Sign in
              </button>

              <a href="/account/register">
                Create account
              </a><input
                type="hidden"
                name="return_url"
                value="/account"
              >
            </form>
          </div>
        </div>

      </div>

    </main>
  </div>
</template>

<script>
export default {
  layout: "account",
};
</script>

<style>
</style>