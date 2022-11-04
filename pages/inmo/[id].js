
import  { useRouter } from "next/router";
import fect from 'isomorphic-fetch'
import Container from "../../components/Container";
import { Footer } from "../../components/Footer";
import Link from "next/link";


const UserProfile = ( { user} ) => {

    console.log( user );

   const router = useRouter();
    const { id } = router.query;
    return (
   
 <Container>
        <div className="show-cards" style={{paddingTop:'60px'}} >
        <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header text-center">
              <img src={user.photo}
                alt={user.city + " " + user.city}
                style={{ borderRadius: "50%", width: "300px",height:"300px" }}
              />
            </div>
            <div className="card-body text-center">
              <h3>
                {user.name } {user.city }
              </h3>
              <p>Address: {user.address } Price: US { user.price } </p>
              <div  >
              <Link href="/" legacyBehavior >
                <button className="btn btn-outline-warning m-2" >Volver</button>
              </Link>
              <button className="btn btn-success m-2 " >Buy now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      <Footer />
    </Container>
    )
 }


 UserProfile.getInitialProps = async (ctx) => {
    console.log(ctx);
     console.log( ctx.query.id );
    const response = await fetch(`https://db-inmoviliaria-production.up.railway.app/api/inmo/${ctx.query.id}`)
    const resJson = await response.json();
    return { user: resJson }

 }

 export default UserProfile;  