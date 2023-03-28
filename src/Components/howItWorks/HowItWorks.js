import React from 'react'
import './howItWorks.css'


const HowItWorks = () => {
    return (
        <div className='howitworks-wrapper'>
            <h2 className='aboutus-heading'>HOW WE WORK ?</h2>
            <div className='carouselwrapper'>

                <div id="myCarousel" className
                ="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className='contentItem'>
                                <p>A group of people comes together to purchase an asset: The group can consist of individuals, families, friends, or business partners. They pool their resources to purchase the asset together, and each person owns a percentage or fraction of the asset.
                                </p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className='contentItem'>
                                <p>Ownership and usage rights are established: The group creates an agreement that outlines how ownership and usage rights will be shared. The agreement typically specifies how the asset will be used, how expenses will be shared, and how the asset will be managed and maintained.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className='contentItem'>
                                <p>
                                    Costs and expenses are shared: The group shares the costs and expenses associated with owning the asset. These can include purchase costs, maintenance costs, insurance, and taxes. The expenses are usually divided based on each owner's percentage of ownership.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className='contentItem'>
                                <p>
                                    Usage rights are established: The agreement also specifies how usage rights will be shared. For example, if the asset is a vacation property, the agreement may specify how many weeks or months each owner is entitled to use the property each year.
                                </p>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HowItWorks