import React from "react";
import Layout from "../../components/layout/Layout";
import FullHeight from "react-full-height";

export default function Favorites() {
  return (
    <Layout>
      {/* <FullHeight> */}
        <main className="py-10  min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              Favorite Recipes
            </h1>
          </div>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="px-4 py-8 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
            </div>
            {/* /End replace */}
          </div>
        </main>
      {/* </FullHeight>  */}
    </Layout>
  );
}
