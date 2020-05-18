import React, { createElement, useState } from 'react';
import Comment from './Comment';
import { Tooltip, Avatar, Paper } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';

export default {
  title: 'Comment',
};

export const Default = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState('');

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction('liked');
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction('disliked');
  };

  const actions = [
    <span key="comment-basic-like">
      <Tooltip title="Like">
        {createElement(action === 'liked' ? ThumbUpAltIcon : ThumbUpAltOutlinedIcon, {
          onClick: like,
        })}
      </Tooltip>
      <span className="comment-action">{likes}</span>
    </span>,
    <span key=' key="comment-basic-dislike"'>
      <Tooltip title="Dislike">
        {React.createElement(action === 'disliked' ? ThumbDownIcon : ThumbDownAltOutlinedIcon, {
          onClick: dislike,
        })}
      </Tooltip>
      <span className="comment-action">{dislikes}</span>
    </span>,
    <span key="comment-basic-reply-to">Reply to</span>,
  ];
  return (
    <Paper style={{ margin: 8, padding: 8 }}>
      <Comment
        author={<a>System Admin</a>}
        avatar={<Avatar>S</Avatar>}
        content={
          <p>
            We supply a series of design principles, practical patterns and high quality design resources (Sketch and
            Axure), to help people create their product prototypes beautifully and efficiently.
          </p>
        }
        datetime={<>at 24:24:24</>}
        actions={actions}
      />
    </Paper>
  );
};
