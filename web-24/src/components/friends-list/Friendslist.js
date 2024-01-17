import 'bootstrap/dist/css/bootstrap.css';
import './Friendslist.css'
import picture1 from './picture1.png'
import picture2 from './picture2.png'
import picture3 from './picture3.png'
import picture4 from './picture4.png'

const Friends = () => {
    return (
        <div className="col-md-6 col-lg-12">
        <div className="card friendscard">
            <div className="card-header d-sm-flex justify-content-between align-items-center border-0">
                <h5 className="card-title">Friends <span className="badge bg-danger bg-opacity-10 text-danger">230</span></h5>
                <a className="btn btn-primary-soft btn-sm see-all-fr" href="#!"> See all friends</a>
            </div>
            <div className="card-body position-relative pt-0">
                <div className="row g-3">
                    <div className="col-6">
                        <div className="width-100 card shadow-none text-center h-100">
                            <div className="card-body p-2 pb-0">
                                <div className="avatar avatar-story avatar-xl">
                                    <a href="#!"><img className="avatar-img1 rounded-circle" src={picture1} alt="" /></a>
                                </div>
                                <h6 className="card-title mb-1 mt-3 "> <a href='#!' className=' friend-name'> Amanda Reed </a></h6>
                                <p className="mb-0 small lh-sm">16 mutual connections</p>
                            </div>
                            <div className="card-footer p-2 border-0">
                                <button className="btn btn-sm btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Send message" data-bs-original-title="Send message">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-text" viewBox="0 0 16 16">
                                        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                        <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                                    </svg>
                                </button>
                                <button className="btn btn-sm btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Remove friend" data-bs-original-title="Remove friend"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-x" viewBox="0 0 16 16">
                                    <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m-.646-4.854.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708" />
                                </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="width-100 card shadow-none text-center h-100">
                            <div className="card-body p-2 pb-0">
                                <div className="avatar avatar-xl">
                                    <a href="#!"><img className="avatar-img1 rounded-circle" src={picture2} alt="" /></a>
                                </div>
                                <h6 className="card-title mb-1 mt-3"> <a href='#!' className=' friend-name'> Samuel Bishop </a></h6>
                                <p className="mb-0 small lh-sm">22 mutual connections</p>
                            </div>
                            <div className="card-footer p-2 border-0">
                                <button className="btn btn-sm btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Send message" data-bs-original-title="Send message">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-text" viewBox="0 0 16 16">
                                        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                        <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                                    </svg>
                                </button>
                                <button className="btn btn-sm btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Remove friend" data-bs-original-title="Remove friend"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-x" viewBox="0 0 16 16">
                                    <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m-.646-4.854.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708" />
                                </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="width-100 card shadow-none text-center h-100">
                            <div className="card-body p-2 pb-0">
                                <div className="avatar avatar-xl">
                                    <a href="#!"><img className="avatar-img1 rounded-circle" src={picture3} alt="" /></a>
                                </div>
                                <h6 className="card-title mb-1 mt-3 ]"> <a href='#!' className=' friend-name'> Bryan Knight </a></h6>
                                <p className="mb-0 small lh-sm">1 mutual connection</p>
                            </div>
                            <div className="card-footer p-2 border-0">
                                <button className="btn btn-sm btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Send message" data-bs-original-title="Send message">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-text" viewBox="0 0 16 16">
                                        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                        <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                                    </svg>
                                </button>
                                <button className="btn btn-sm btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Remove friend" data-bs-original-title="Remove friend"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-x" viewBox="0 0 16 16">
                                    <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m-.646-4.854.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708" />
                                </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="width-100 card shadow-none text-center h-100">
                            <div className="card-body p-2 pb-0">
                                <div className="avatar avatar-xl">
                                    <a href="#!"><img className="avatar-img1 rounded-circle" src={picture4} alt =""/></a>
                                </div>
                                <h6 className="card-title mb-1 mt-3"> <a href='#!' className=' friend-name'> Amanda Reed </a></h6>
                                <p className="mb-0 small lh-sm">15 mutual connections</p>
                            </div>
                            <div className="card-footer p-2 border-0">
                                <button className="btn btn-sm btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Send message" data-bs-original-title="Send message">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-text" viewBox="0 0 16 16">
                                        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                        <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                                    </svg>
                                </button>
                                <button className="btn btn-sm btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Remove friend" data-bs-original-title="Remove friend"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-x" viewBox="0 0 16 16">
                                    <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m-.646-4.854.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708" />
                                </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )

}
export default Friends