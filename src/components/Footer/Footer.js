import '../Footer/Footer.css'



function Footer(){
    return(<>
    
   <div className='container-fluid bg-dark text-light py-5'>
        <div className='row'>
            <div className='col-md-6 p-5'>
                <h4>education</h4>
                <h3>Take  student experience <br/>to the next level </h3>
            </div>


            <div className='col-md-3'>
                <h3>Product</h3>
                    <ul className='list1'>
                        <li>Capmuskit</li>
                        <li>Capmuskit</li>
                        <li>Capmuskit</li>
                        <li>Capmuskit</li>
                        <li>Capmuskit</li>
                        <li>Capmuskit</li>
                    </ul>
            </div>


            <div className='col-md-3'>
                    <h3>Company</h3>
                    <ul className='list2'>
                        <li>Carees</li>
                        <li>Carees</li>
                        <li>Carees</li>
                    </ul>
                    <h3>Resources</h3>
                    <ul className='list3'>
                        <li>Blog</li>
                    </ul>

            </div>
    </div>
   </div>

    
    </>);
}
export default Footer;