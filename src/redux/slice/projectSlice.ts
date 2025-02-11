import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectApi = createApi({
  reducerPath: "projectApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["project"],
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => "/project",
      providesTags: ["project"],
    }),
    getProjectById: builder.query({
      query: (id) => `/projects/${id}`,
      providesTags: (result, error, id) => [{ type: "project", id }],
    }),
    createProject: builder.mutation({
      query: (newProject) => ({
        url: "/project",
        method: "POST",
        body: newProject,
      }),
      invalidatesTags: ["project"],
    }),
    updateProject: builder.mutation({
      query: ({ id, updatedProject }) => ({
        url: `/project/${id}`,
        method: "PATCH",
        body: updatedProject,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "project", id },
        "project",
      ],
    }),
    deleteProject: builder.mutation({
      query: (_id) => ({
        url: `project/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "project", id },
        "project",
      ],
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useGetProjectByIdQuery,
  useCreateProjectMutation,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
} = projectApi;
