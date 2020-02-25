import React from 'react'

export const Comment = ( props ) => {
    // const onRemove = (id) => {
    //     fetch(`http://localhost:5000/api/comments/${id}`, {
    //       method: 'DELETE',
    //       mode: 'cors'
    //     })
    //     console.log(id)
    // }

    return (
      <div className="comment col s12 m7">
        <div className="card horizontal">
          <div className="card-image">
            {/* <img className="circle responsive-img avatar" src={developer} alt="alex"/> */}
          </div>
          <div className="card-stacked">
            <div className="flex card-content">
              <div className="flex">
                <img className="circle responsive-img comment-avatar" src={props.ava} alt="avatar"/>
                <p className="grey-text text-darken-2 name">{props.name}</p>
                <p>{props.text}</p>
              </div>
              <div className="likes">      
                <i className="material-icons light-green-text">favorite</i>{props.likes}
                {/* <i className="material-icons light-green-text">favorite_border</i> */}
                <i className="material-icons red-text text-darken-4">thumb_down</i>{props.dislikes}
              </div>
            </div>
            <div className="card-action">
              <div>
                <i className="material-icons grey-text text-darken-2">edit</i>
                <i onClick={() => props.onRemove(props._id)} className="material-icons black-text text-darken-4">delete</i>
                <i className="material-icons blue-text text-lighten-1">reply</i>
              </div>
              <p>{props.date.slice(0, 10)}</p>
            </div>
          </div>
        </div>
      </div>
    )
}
