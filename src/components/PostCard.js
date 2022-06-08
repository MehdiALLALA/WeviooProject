import React from 'react'
import Moment from 'react-moment';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import { Image } from 'primereact/image';
import { Chip } from 'primereact/chip';

const PostCard = (props) => {

    let data =  props.data 

    const listOfTags = (
        data.tags.map(tag =>
          <Chip label={tag} className="custom-chip m-1" key={tag}/>  
        )
    );



    // const prepareTags = (tags) => {
    //     tags.map(tag => {
    //         return <Chip label={tag} className="custom-chip m-1"/> 
    //     })
    // }

    const header = (
        <div className="grid mt-2 mr-2 ml-2">
            <div className="col-2">
            <Avatar image={data.owner.picture} shape="circle" size="large" />
            </div>
            <div className="col-8">
                <span>
                    {data.owner.title}  {data.owner.firstName} {data.owner.lastName}
                </span>
                <br/>
                <span>
                    <Moment date={data.publishDate} format="DD/MM/YYYY HH:MM:SS" />
                </span>
            </div>
        </div>
    );
    const footer = (
        <span>
            <Button label="View More Details" icon="pi pi-angle-right" className="p-button-link" />
        </span>
    );
  return (
    <>
    <Card footer={footer} header={header}>
    <Image src={data.image} preview="true" imageClassName="w-full" />
    <p className="m-0" style={{lineHeight: '1.5'}}>{data.text}</p>
    <div>
    {listOfTags}
    </div>
    <div>  
        <i className="pi pi-thumbs-up m-1 mt-3" style={{'fontSize': '1em', 'color': 'var(--primary-color)'}}> 
            <span style={{'color': 'black'}}> {data.likes}</span>
        </i>
    </div>
    
    </Card>
    </>
  )
}

export default PostCard