import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/admin" }),
  tagTypes: ["Blogs"],
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => "/blogs",
      providesTags: ["Blogs"],
    }),
    getBlogById: builder.query({
      query: (id) => `/blogs/${id}`,
      providesTags: (result, error, id) => [{ type: "Blogs", id }],
    }),
    createBlog: builder.mutation({
      query: (newBlog) => ({
        url: "/blogs",
        method: "POST",
        body: newBlog,
      }),
      invalidatesTags: ["Blogs"],
    }),
    updateBlog: builder.mutation({
      query: ({ id, updatedBlog }) => ({
        url: `/blogs/${id}`,
        method: "PATCH",
        body: updatedBlog,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Blogs", id },
        "Blogs",
      ],
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Blogs", id }, "Blogs"],
    }),
  }),
});

export const {
  useGetBlogsQuery,
  useGetBlogByIdQuery,
  useCreateBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = adminApi;
