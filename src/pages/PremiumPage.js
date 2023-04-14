import{ Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

const PremiumPage = () => {

    return (
        <Authenticator>
            {({ signOut}) =>(
                <div>
                    <hi>Hello, welcome to my Website</hi>
                    <h3>You are authenticated !! This is the premium content page !!</h3>
                    <button onClick={signOut}>Sign Out</button>
                </div>
            )}
        </Authenticator>
    );
}

export default PremiumPage;