import { useUser} from '@clerk/nextjs'
const Hero = () => {
    // Use the useUser hook to get the Clerk.user object
    const { isLoaded, isSignedIn, user } = useUser()
  
    if (!isLoaded || !isSignedIn) {
      return null
    }
    return (<div className='text-lg font-medium text-accent-focus pl-1'>{ user.fullName}</div>)
  }
  
  export default Hero