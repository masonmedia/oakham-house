<template>
    <div class="bg-white">
        <TheHero />
        <div class="container-fluid">

            <div class="row">
                <div class="col-lg-12 p-0">
                    <img class="w-100 h-100 object-fit-cover" src="https://www.mccallumsather.com/wp-content/uploads/2014/10/RyU-Oakham-2020_1001-2048x1365.jpg" alt="">
                </div>
            </div>

            <div class="row min-vh-100" id="news">
                <div class="col-lg-5 d-flex flex-column justify-content-center align-items-start text-start p-5">
                    <div class="p-4">
                        <div class="mb-4 bg-dark shadow rounded-4 p-3 d-inline-block">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="lightgrey" class="bi bi-tools" viewBox="0 0 16 16">
                            <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3q0-.405-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708M3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z"/>
                            </svg>
                        </div>
                    <h2 class="display-5 fw-bold lh-1">Under-construction note</h2>
                    <p class="h5 fw-light lh-base my-4">Oakham is refreshing how it shows up. You’re seeing the first step — a clearer story, easier access, and a renewed commitment to being a venue for meaningful gatherings. More coming soon. In the meantime, Tom has answers.</p>
                    <TheButton 
                    btnText="Inquire" />
                    </div>
                </div>
                <div class="col-lg-7 p-0">
                    <img class="w-100 h-100 object-fit-cover" src="https://ssmscdn.yp.ca/image/resize/d7dbe68a-0e45-4751-9fb7-d91a92ac9210_ypapp-merchant-page.jpg" alt="">
                </div>
            </div>
            
            <div class="row min-vh-100">
                <div class="col-lg-7 p-0 order-2 order-lg-1">
                    <img class="w-100 h-100 object-fit-cover" src="https://www.torontomu.ca/content/dam/news-events/news/2021/10/Oakham5small.jpg" alt="">
                </div>
                <div class="col-lg-5 d-flex flex-column justify-content-center align-items-start text-start p-5 order-1 order-lg-2" id="about">
                    <div class="p-4">
                        <div class="mb-4 bg-dark shadow rounded-4 p-3 d-inline-block">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="lightgrey" class="bi bi-columns-gap" viewBox="0 0 16 16">
                            <path d="M6 1v3H1V1zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm14 12v3h-5v-3zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM6 8v7H1V8zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm14-6v7h-5V1zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/>
                            </svg>
                        </div>
                    <h2 class="display-5 fw-bold lh-1">About the <span class="text-secondary">venue</span></h2>
                    <p class="h5 fw-light lh-base my-4">At the corner of Gould and Church Streets, steps from Sankofa Square (formerly Yonge-Dundas Square) and directly subway-accessible, Oakham House has been a fixture of student-led and community gatherings for decades.</p>
                     <!-- Button trigger modal -->
                     <TheButton 
                            btnText="Read more" data-bs-toggle="modal" data-bs-target="#exampleModal" />
                    <!-- <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">Read more
                    </button> -->

                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content pb-5">
                        <div class="modal-header border-0 position-relative">
                            <button type="button" class="border-0 rounded-circle position-absolute end-0 mt-5 pt-2 me-4 bg-black p-2" data-bs-dismiss="modal" aria-label="Close">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                                </svg>

                            </button>
                        </div>
                        <div class="col-md-10 offset-md-1 modal-body p-5">
                            <img src="/images/logos/oakham_logo_vert.png" class="mb-3" style="width: 80px;" alt="">
                            <h1 class="display-2 fw-bold">About Oakham House</h1>
                            <p class="h5 lh-base fw-light mt-4">Originally a Gothic Revival Victorian residence, it’s now a heritage event space where progressive ideas and lasting memories take shape. Recent renovations bring full accessibility, rooftop solar panels, and customizable AV and lighting to a venue that still feels intimate and character-rich.</p>
                            <p class="h5 lh-base fw-light mt-4">If cookie-cutter conference rooms aren’t your thing, Oakham offers a sense of place — a space guests remember as part of the story itself.</p>
                            <p class="h5 lh-base fw-light mt-4">Our Venue Manager provides planning advice, project management, and coordination throughout your event. Choose between in-house catering or our partner caterers to match your needs.</p>
                            <p class="h5 lh-base fw-light my-4">Our team focuses on two things: making your event run smoothly and ensuring guests remember the experience as much as the space.</p>
                            <TheButton 
                            btnText="Inquire" />
                        </div>
                        </div>
                    </div>
                    </div>
                    
                    </div>
                </div>
            </div>

            <!-- spaces -->
            <div class="row p-5 border-top" id="spaces">
                <div class="col-lg-8 offset-lg-2 text-center py-5">
                    <p class="h5 text-secondary">Capacities & Details</p>
                    <h2 class="display-4 fw-bold">Oakham <span class="text-secondary">Spaces</span></h2>
                    <p class="h4 my-3 fw-light">Oakham House features three distinct spaces: the historic Oakham Lounge, the welcoming Oakham Café, and the versatile Thomas Lounge—each blending heritage architecture with contemporary community use.</p>
                </div>
                
                <div class="col-xl-4 col-lg-6">
                    <TheCard 
                    cardImg="https://www.eventsource.ca/listings/OakhamHouse/gallery/oakham-house-toronto-060-full_size.jpg?format=webp&maxwidth=1920"
                    cardTitle="Thomas Lounge"
                    cardText="The flagship space with heritage entrance and original architectural details. Works for receptions, seminars, and seated events"
                    textClass="h6 lh-base p-3 border rounded-4 bg-body-secondary mb-3 fw-light"
                    cardClass="shadow"
                    bodyClass="p-4"
                    >
                        <template #list>
                            <li class="list-group-item"><span class="fw-bold">Location: </span>Main Floor / ~1,925 sq. ft.</li>
                            <!-- <li class="list-group-item"><span class="fw-bold">Size: </span>~1,200 sq. ft. (dimensions ~40’ x 30’)</li> -->
                            <li class="list-group-item"><span class="fw-bold">Capacity: </span>80–100 (reception) / 70–90 (theatre) / 30–40 (boardroom)</li>
                            <li class="list-group-item"><span class="fw-bold">Features: </span>High ceilings, natural light, AV setup, Wi-Fi, direct Church Street entrance.</li>
                        </template>
                    </TheCard>
                </div>
                <div class="col-xl-4 col-lg-6">
                    <TheCard 
                    cardImg="https://www.eventsource.ca/listings/OakhamHouse/gallery/oakham-house-toronto-059-full_size.jpg?format=webp&maxwidth=1920"
                    cardTitle="Oakham Lounge"
                    cardText="A flexible, light-filled room with post-and-beam architecture — adaptable for panels, networking, or seated discussions."
                    textClass="h6 lh-base p-3 border rounded-4 bg-body-secondary mb-3 fw-light"
                    cardClass="shadow"
                    bodyClass="p-4"
                    >
                     <template #list>
                            <li class="list-group-item"><span class="fw-bold">Location: </span>Upper Floor / ~1,600 sq. ft.</li>
                            <!-- <li class="list-group-item"><span class="fw-bold">Size: </span>Approx. 1,600 sq. ft.</li> -->
                            <li class="list-group-item"><span class="fw-bold">Capacity: </span>70–90 (reception) / 70–90 (theatre) / 20–40 (boardroom)</li>
                            <li class="list-group-item"><span class="fw-bold">Features: </span>AV setup, Wi-Fi, configurable layout.</li>
                        </template>
                    </TheCard>
                </div>
                <div class="col-xl-4 col-lg-12">
                    <TheCard 
                    cardImg="https://www.torontomu.ca/content/dam/news-events/news/2021/10/web-lead-oakham.jpg"
                    cardTitle="Oakham Café (bundle options)"
                    cardText="Available on weekends and during summer, the Café connects directly to both lounges — ideal for multi-room events or relaxed receptions."
                    textClass="h6 lh-base p-3 border rounded-4 bg-body-secondary mb-3 fw-light"
                    cardClass="shadow"
                    bodyClass="p-4"
                    >
                        <template #list>
                            <li class="list-group-item"><span class="fw-bold">Location: </span>Main Floor / Versatile restaurant space</li>
                            <!-- <li class="list-group-item">Can be bundled with Lounge rentals (Whether we cater your event or you use the physical space for breakout or networking rooms)</li> -->
                            <li class="list-group-item"><span class="fw-bold">Capacity: </span>40–60 guests</li>
                            <li class="list-group-item"><span class="fw-bold">Features: </span>Adjacent to event spaces, flexible seating, catering available, can bundle with Lounge rentals.</li>
                        </template>
                    </TheCard>
                </div>
            </div> 
            <!-- end cards -->

            <div class="row">
                <div class="col-lg-12 p-0">
                    <img src="https://www.eventsource.ca/listings/OakhamHouse/gallery/oakham-house-toronto-044-full_size.jpg?format=webp&maxwidth=1920" class="w-100 h-100 object-fit-cover" alt="">
                </div>
            </div>

            <!-- events -->
            
            <div class="row p-5" id="events">
                <div class="col-lg-10 offset-lg-1 d-flex flex-column justify-content-center align-items-center text-center py-5">
                    <h2 class="h3 fw-900 lh-1">Event types</h2>
                    <p class="display-4 fw-light my-4">Panels · Board Retreats · AGMs · Conferences · Workshops · Weddings · Celebrations · Community Gatherings</p>
                    <p class="h4 lh-base mb-5">Oakham House is designed for everything from formal presentations to evenings of celebration — with spaces that adapt easily and staff who understand what success looks like from both sides of the podium.</p>
                    <TheButton btnText="Book your event" />
                </div>
                <!-- <div class="row p-0">
                    <div class="col-xl-3 col-lg-6 py-4 d-flex flex-column" v-for="(item, index) in content.events" :key="index">
                        <TheCard 
                        :cardTitle="item.title"
                        titleClass="fw-bold mb-3 border-bottom border-5 pb-3"
                        textClass="mt-auto"
                        :cardText="item.description"
                        />
                    </div>
                </div> -->
            </div>

            <div class="row">
                <div class="col-lg-12 p-0">
                    <img src="https://www.eventsource.ca/listings/OakhamHouse/gallery/oakham-house-toronto-039-full_size.jpg?format=webp&maxwidth=1920" class="w-100 object-fit-cover" style="height: 600px" alt="">
                </div>
            </div>

            <!-- location details -->

            <div class="row p-5 bg-body-secondary" id="location">
                <div class="col-lg-10 offset-lg-1 text-center py-5">
                    <div class="mb-2 bg-dark rounded-4 p-3 d-inline-block">
                        <img src="/images/logos/13-trans.png" class="" style="width: 50px;" alt="">
                    </div>
                    <p class="display-5 fw-light my-3">Located in the heart of downtown Toronto, Oakham House is easily accessible by TTC, car, or foot. Surrounded by cafes, parks, and cultural landmarks, it offers a convenient, central setting for city-based gatherings and events.</p>
                </div>
                <div class="row p-0">
                    <div class="col-xl-4 col-lg-6 p-4 d-flex flex-column">
                        <TheCard
                        :cardTitle="content.location[0].title"
                        titleClass="border-bottom border-4 pb-3"
                        bodyClass="bg-body-secondary">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.5410794044446!2d-79.38084012424845!3d43.65771555213935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb3564bc213f%3A0x4fc521c087b0b402!2sOakham%20Caf%C3%A9!5e0!3m2!1sen!2sca!4v1759944622693!5m2!1sen!2sca" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </TheCard>
                    </div>
                    <div class="col-xl-4 col-lg-6 p-4 d-flex flex-column">
                        <TheCard
                        :cardTitle="content.location[2].title"
                        titleClass="border-bottom border-4 pb-3"
                        :cardText="content.location[2].text"
                        bodyClass="bg-body-secondary"
                        >
                            <ul class="list-group list-unstyled">
                                <li class="small border-top py-2" v-for="(i, index) in content.location[2].list" :key="index">
                                    <img class="me-1" src="/images/icons/icon-car.svg"> {{ i }}
                                </li>
                            </ul>
                        </TheCard>
                    </div>
                    <div class="col-xl-4 col-lg-12 p-4 d-flex flex-column">
                        <TheCard
                        :cardTitle="content.location[1].title"
                        titleClass="border-bottom border-4 pb-3"
                        :cardText="content.location[1].text"
                        bodyClass="bg-body-secondary"
                        />
                    </div>
                </div>
            </div>
            <!-- end location -->

            <div class="row p-5" id="booking">
                <div class="col-lg-12 d-flex flex-column justify-content-center align-items-center text-center min-vh-75">
                    <TheCard
                    bodyClass="bg-white"
                    cardTitle="Book your event"
                    titleClass="h4 fw-900 text-secondary"
                    cardText="Interested in visiting the Toronto Metropolitan University Student Centre?"
                    textClass="display-2 fw-bold lh-1"
                    btnText="Book now"
                    >
                    <p class="h4 fw-light lh-base my-4 col-md-8 offset-md-2">Schedule a personalized tour and discover how our spaces can be tailored to your event, from intimate gatherings to large, unforgettable celebrations.</p>
                </TheCard>
                </div>
            </div>

        </div>
    </div>
  </template>

<script setup>
import content from '~/data/content.json'
</script>
