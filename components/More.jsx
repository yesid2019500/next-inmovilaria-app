import React from 'react'
import { FaAmbulance, FaArtstation, FaBitbucket, FaBorderAll, FaCashRegister, FaCcAmazonPay, FaConfluence, FaDeezer, FaDeploydog, FaFontAwesomeFlag, FaPagelines, FaUikit } from 'react-icons/fa';
import styles from '../styles/More.module.css';

export const More = () => {
  return (
    <>
    <section className={ styles.section_services} >
		<div className="container">
			<div className="row justify-content-center text-center">
				<div className="col-md-10 col-lg-8">
					<div className="header_section">
						<h2 className="title">Exclusive <span>Services</span></h2>
						<p className="description">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some injected humour</p>
					</div>
				</div>
			</div>
			<div className="row">
			
				<div className="col-md-6 col-lg-4">
					<div className={styles.single_service} >
						<div className={styles.part_1} >
                            <FaBitbucket />
							<h3 className="title">Express delivery innovative Design service</h3>
						</div>
						<div className={styles.part_2} >
							<p className={styles.description} >Express delivery inno service effective logistics solution for delivery of small cargo delivery service.</p>
							<a href="#">
                               
                                Read More</a>
						</div>
					</div>
				</div>
			
				<div className="col-md-6 col-lg-4">
					<div className={styles.single_service} >
						<div className={styles.part_1} >
							<FaCcAmazonPay/>
							<h3 className={styles.title} >Online chat may refer to any kind communication</h3>
						</div>
						<div className={styles.part_2} >
							<p className={styles.description} >Express delivery inno service effective logistics solution for delivery of small cargo delivery service.</p>
							<a href="#">
                               
                                Read More
                                </a>
						</div>
					</div>
				</div>
			
				<div className="col-md-6 col-lg-4">
					<div className={styles.single_service} >
						<div className={styles.part_1} >
							<FaDeezer/>
							<h3 className={styles.title} >Service provider provide organizations consulting</h3>
						</div>
						<div className={styles.part_2} >
							<p className={styles.description} >Express delivery inno service effective logistics solution for delivery of small cargo delivery service.</p>
							<a href="#">
                              
                                Read More</a>
						</div>
					</div>
				</div>
			
				<div className="col-md-6 col-lg-4">
					<div className={styles.single_service} >
						<div className={styles.part_1} >
							<FaFontAwesomeFlag/>
							<h3 className={styles.title} >Express delivery innovative Design service</h3>
						</div>
						<div className={styles.part_2} >
							<p className={styles.description} >Express delivery inno service effective logistics solution for delivery of small cargo delivery service.</p>
							<a href="#">
                            
                                Read More</a>
						</div>
					</div>
				</div>
			
				<div className="col-md-6 col-lg-4">
					<div className={styles.single_service} >
						<div className={styles.part_1} >
							<FaUikit/>
							<h3 className={styles.title} >Provide solutions and services to end users</h3>
						</div>
						<div className={styles.part_2} >
							<p className={styles.description} >Express delivery inno service effective logistics solution for delivery of small cargo delivery service.</p>
							<a href="#">
                            
                                Read More</a>
						</div>
					</div>
				</div>
				
				<div className="col-md-6 col-lg-4">
					<div className={styles.single_service} >
						<div className={styles.part_1} >
							<FaBorderAll/>
							<h3 className={styles.title} >This broad term incorporates all IT businesses</h3>
						</div>
						<div className={styles.part_2} >
							<p className={styles.description} >Express delivery inno service effective logistics solution for delivery of small cargo delivery service.</p>
							<a href="#" className="mr-2" >
                              
                                 Read More </a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    </>
  )
}
