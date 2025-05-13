import AccountHeaders from "../AccountHeaders"
import UserInformation from "./_components/user-information/UserInformation"

function Profile() {
  return (
    <section className="mt-10 md:mt-0">
      {/* header */}
      <AccountHeaders title="my profile" />
      {/* body */}
      <UserInformation/>
    </section>
  )
}

export default Profile
