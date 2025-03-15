import { AuthUser } from "@/model/User";

declare module "next-auth" {
  interface Session {
    user: AuthUser;
  }
}
