import React from 'react'

function HeaderHome() {
    //onclick btn
    return (
        <div class="px-4 d-flex flex-column justify-content-center py-5 vh-100 text-center bg-light">


            <h1 class="display-5 fw-bold">Finding a job has never been easier</h1>
            <p class="lead mb-4">We hiring allows you to find the best job offers on the market and apply quickly and securely.</p>

            <div class=" d-sm-flex justify-content-sm-center">
                <a class="btn btn-primary btn-lg px-4 gap-3" href="/api/offers" alt="offers">See all offers</a>
            </div>

        </div>

    )
}

export default HeaderHome