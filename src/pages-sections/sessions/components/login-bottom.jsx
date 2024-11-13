import { Fragment } from "react";
import BoxLink from "./box-link";
import { FlexBox, FlexRowCenter } from "components/flex-box";

export default function LoginBottom() {

    // const handleRegisterClick = () => {
    //     window.location.href = "/register"; // Navigate to the /register page and reload
    // };

  return <Fragment>
      {
      /* DON'T HAVE ACCOUNT AREA */
    }
      <FlexRowCenter gap={1} my={3}>
        Don&apos;t have account?
        <BoxLink title="Register" href="/register"  />
      </FlexRowCenter>

      {
      /* FORGET YOUR PASSWORD AREA */
    }
      <FlexBox gap={1} py={2} borderRadius={1} justifyContent="center" bgcolor="grey.200">
        Forgot your password?
        <BoxLink title="Reset It" href="/reset-password" />
      </FlexBox>
    </Fragment>;
}