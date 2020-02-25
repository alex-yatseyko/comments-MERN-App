import React from 'react'

export const Comment = ({ ava, name, text, likes, dislikes, date, id, onRemove, onLike, onDislike}) => {
    // const onRemove = (id) => {
    //     fetch(`http://localhost:5000/api/comments/${id}`, {
    //       method: 'DELETE',
    //       mode: 'cors'
    //     })
    //     console.log(id)
    // }

    return !!text && (
      <div className="comment col s12 m7">
        <div className="card horizontal">
          <div className="card-image">
            {/* <img className="circle responsive-img avatar" src={developer} alt="alex"/> */}
          </div>
          <div className="card-stacked">
            <div className="flex card-content">
              <div className="flex">
                <img className="circle responsive-img comment-avatar" src={ava} alt="avatar"/>
                <p className="grey-text text-darken-2 name">{name}</p>
                <p>{text}</p>
              </div>
              <div className="likes">      
                <i className="material-icons light-green-text" onClick={ () => onLike(id) }>favorite</i>{likes}
                <i className="material-icons red-text text-darken-4" onClick={ () => onDislike(id) }>thumb_down</i>{dislikes}
              </div>
            </div>
            <div className="card-action">
              <div>
                <i className="material-icons grey-text text-darken-2">edit</i>
                <i onClick={() => onRemove(id)} className="material-icons black-text text-darken-4">delete</i>
                <i className="material-icons blue-text text-lighten-1">reply</i>
              </div>
              <p>{date.slice(0, 10)}</p>
            </div>
          </div>
        </div>
      </div>
    )
}
