import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import { EmojiSmile, EmojiFrown, EmojiNeutral } from 'react-bootstrap-icons'

const Feelings = () => {
    return (
        <div>
            <Card>
                <Card.Body>
                    <div className="d-flex flex-row justify-content-between mb-2">
                        <h4><Badge variant="light">Overall Feeling:</Badge></h4>
                        <EmojiFrown size={48} />
                        <EmojiNeutral size={48} />
                        <EmojiSmile color="#0275d8" size={48} />
                    </div>
                    <div className="d-flex flex-column justify-content-between">
                        <p><span className="lead mr-1">Last Week's Goal:</span>Focus on your fitness</p>
                        <p><span className="lead mr-1">This Week's Goal:</span>Focus on your family</p>
                    </div>
                </Card.Body>
            </Card>
        </div>
        
    )
}

export default Feelings
