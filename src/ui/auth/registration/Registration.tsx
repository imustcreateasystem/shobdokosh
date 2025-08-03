import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/components/Card";
import AuthLink from "../layout/AuthLink";
import RegistrationForm from "./forms/RegistrationForm";
import Divider from "@/ui/components/Divider";
import GoogleSignIn from "../layout/GoogleSignIn";
import { Stack } from "@/ui/components/Container";

export default function Registration() {
  return (
    <Card gap={8} fullWidth className="max-w-sm rounded-none sm:rounded-md">
      <CardHeader gap={1} justifyBetween>
        <CardTitle>Sign up</CardTitle>
        <CardDescription>
          Create an account to save searches, set display preferences, and
          suggest words.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Stack gap={4}>
          <RegistrationForm />
          <Divider text="Or continue with" />
          <GoogleSignIn />
        </Stack>
      </CardContent>
      <CardFooter>
        <AuthLink variant="signup" href="/login" />
      </CardFooter>
    </Card>
  );
}
