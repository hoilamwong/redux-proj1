import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

const ReactionButtons = ({ post }) => {
  const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
  }

  const dispatch = useDispatch()

  const reactionButtons = Object.entries(reactionEmoji).map(([emojiName, emoji]) => {
    return (
      <button
        key={emojiName}
        type="button"
        className="reactionButton"
        onClick={() => 
          dispatch( reactionAdded({ postId: post.id, reaction: emojiName}) )
        }
      >
        {emoji} {post.reactions[emojiName]}
      </button>
    )
  })

  return (
    <div>{reactionButtons}</div>
  )
}

export default ReactionButtons
