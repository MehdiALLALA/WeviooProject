import React from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import { Image } from 'primereact/image';
import { Chip } from 'primereact/chip';

const PostCard = () => {

    const header = (
        <div className="grid mt-2 mr-2 ml-2">
            <div className="col-2">
            <Avatar image="https://randomuser.me/api/portraits/med/men/60.jpg" shape="circle" size="large" />
            </div>
            <div className="col-8">
                <span>
                    Mr Mehdi ALLALA
                </span>
                <br/>
                <span>
                    2020-05-14T16:28:10.135Z
                </span>
            </div>
        </div>
    );
    const footer = (
        <span>
            <Button label="View More" icon="pi pi-angle-right" className="p-button-link" />
        </span>
    );
  return (
    <>
    <Card footer={footer} header={header}>
    <Image src="https://img.dummyapi.io/photo-1524550390021-670246c412c5.jpg" preview="true" imageClassName="w-full"/>
    <p className="m-0" style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
    <div>
    <Chip label="water" className="custom-chip m-1"/>
    <Chip label="dog" className="custom-chip m-1"/>
    <Chip label="nature" className="custom-chip m-1"/>
    </div>
    <div>  
        <i className="pi pi-thumbs-up m-1 mt-3" style={{'fontSize': '1em', 'color': 'var(--primary-color)'}}> 
            <span style={{'color': 'black'}}> 50</span>
        </i>
    </div>
    
    </Card>
    </>
  )
}

export default PostCard