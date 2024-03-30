export const Heros = () => {
    return (
        <div>
            <div className='d-none d-lg-block'>
                <div className='row g-0 mt-5'>
                    <div className='col-sm-6 col-md-6'>
                        <div className='col-image-left'></div>
                    </div>

                    <div className='col-4 col-md-4 container d-flex justify-content-center align-items-center'>
                        <div className='ml-2'>
                            <h1>What have you been reading?</h1>
                            <p className='lead'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Aperiam asperiores commodi dicta dolores, earum eligendi error eum
                                exercitationem inventore iusto nam praesentium, rerum sint suscipit
                                tempore vero voluptatum! Ducimus, incidunt?
                            </p>
                            <a href="#" className='btn main-color btn-lg text-white'>Sign up</a>
                        </div>
                    </div>
                </div>
                <div className='row g-0'>
                    <div className='col-4 col-md-4 container d-flex justify-content-center align-items-center'>
                        <div className='ml-2'>
                            <h1>Our collection is always changing!</h1>
                            <p className='lead'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
                                delectus doloribus fugiat odit quos recusandae suscipit! Asperiores
                                aspernatur at cumque debitis delectus distinctio facere, ipsa maxime
                                officiis, possimus tempora tenetur.
                            </p>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-6'>
                        <div className='col-image-right'></div>
                    </div>
                </div>
            </div>

            {/* Mobile Heros */}
            <div className='d-lg-none'>
                <div className='container'>
                    <div className='m-2'>
                        <div className='col-image-left'></div>
                        <div className='mt-2'>
                            <h1>What have you been reading?</h1>
                            <p className='lead'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Aperiam asperiores commodi dicta dolores, earum eligendi error eum
                                exercitationem inventore iusto nam praesentium, rerum sint suscipit
                                tempore vero voluptatum! Ducimus, incidunt?
                            </p>
                            <a href="#" className='btn main-color btn-lg text-white'>Sign up</a>
                        </div>
                    </div>
                    <div className='m-2'>
                        <div className='col-image-right'></div>
                        <div className='mt-2'>
                            <h1>Our collection is always changing!</h1>
                            <p className='lead'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Aperiam asperiores commodi dicta dolores, earum eligendi error eum
                                exercitationem inventore iusto nam praesentium, rerum sint suscipit
                                tempore vero voluptatum! Ducimus, incidunt?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}