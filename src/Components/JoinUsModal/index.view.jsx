import React from 'react'

import "./index.css"

const JoinUsModal = () => {
    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <iframe  className="iframeWindow" src="https://mailchi.mp/4000178dd583/415bdhjwzk" frameborder="0" title="SubsciptionLink"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinUsModal
