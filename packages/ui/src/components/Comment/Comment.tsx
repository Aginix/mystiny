import React, { FC, ReactNode } from 'react';
import { makeStyles } from '@material-ui/core';
import { AppTheme } from '@mystiny/theme';

function getAction(actions: React.ReactNode[]) {
  if (!actions || !actions.length) {
    return null;
  }
  const actionList = actions.map((action, index) => <li key={`action-${index}`}>{action}</li>);
  return actionList;
}

export interface CommentProps {
  actions?: Array<ReactNode>;
  author?: ReactNode;
  avatar?: ReactNode;
  content: ReactNode;
  children?: ReactNode;
  datetime?: ReactNode;
}

const useStyles = makeStyles((theme: AppTheme) => ({
  comment: {
    position: 'relative',
  },
  inner: {
    display: 'flex',
    padding: `${theme.spacing(2)} 0`,
  },
  avatar: {
    position: 'relative',
    flexShrink: 0,
    marginRight: theme.spacing(2),
    cursor: 'pointer',
  },
  actions: {
    // marginTop: theme.spacing(2),
    marginBottom: 'inherit',
    paddingLeft: 0,
    '& *,': {
      display: 'inline-block',
      color: 'rgba(0,0,0,.45)',
      marginRight: theme.spacing(1),
    },
  },
  author: {
    display: 'flex',
    flexWrap: 'wrap',
    WebkitBoxPack: 'start',
    justifyContent: 'flex-start',
    marginBottom: theme.spacing(1),
    fontSize: 14,
  },
  authorName: {
    color: 'rgba(0,0,0,.45)',
    transition: 'color .3s',
  },
  authorTime: {
    paddingLeft: theme.spacing(1),
    color: '#ccc',
    whiteSpace: 'nowrap',
    cursor: 'auto',
  },
  content: {
    position: 'relative',
    WebkitBoxFlex: 1,
    flex: '1 1 auto',
    minWidth: 1,
    fontSize: 14,
    wordWrap: 'break-word',
  },
  contentDetail: {},
  nested: {
    paddingLeft: theme.spacing(2),
  },
}));

const Comment: FC<CommentProps> = ({ actions, author, avatar, content, datetime, children, ...otherProps }) => {
  const classes = useStyles({});
  const avatarDom = avatar ? (
    <div className={classes.avatar}>
      {typeof avatar === 'string' ? <img src={avatar} alt="comment-avatar" /> : avatar}
    </div>
  ) : null;

  const actionDom = actions && actions.length ? <ul className={classes.actions}>{getAction(actions)}</ul> : null;

  const authorContent = (
    <div className={classes.author}>
      {author && <span className={classes.authorName}>{author}</span>}
      {datetime && <span className={classes.authorTime}>{datetime}</span>}
    </div>
  );

  const contentDom = (
    <div className={classes.content}>
      {authorContent}
      <div className={classes.contentDetail}>{content}</div>
      {actionDom}
    </div>
  );

  const comment = (
    <div className={classes.inner}>
      {avatarDom}
      {contentDom}
    </div>
  );

  const renderNested = (nestedChildren: any) => {
    return <div className={classes.nested}>{nestedChildren}</div>;
  };

  return (
    <div {...otherProps} className={classes.comment}>
      {comment}
      {children ? renderNested(children) : null}
    </div>
  );
};

export default Comment;
