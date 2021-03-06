/* @flow */
import { connect } from 'react-redux';
import ProjectsList from './presenter';
import { fetchProjects } from '../Projects/reducer';
import type { Action } from '../types';

const mapStateToProps = state => {
  const { auth, projects } = state;

  return {
    token: auth.api_token,
    login: auth.login,
    avatar_url: auth.avatar_url,
    projects: projects.projects,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  fetchProjects: () => dispatch(fetchProjects()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsList);
