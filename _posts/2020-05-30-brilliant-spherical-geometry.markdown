---
layout: post
mathjax: true
title: "Brilliant.org: Spherical Geometry"
date: 2020-05-30 17:30:20 +0300
description: An introduction to Spherical Geometry
img:  Triangles_spherical_geometry.jpg
tag: ['Math','Geometry','Linear Algebra']
---
I'm quite the avid proponent of [Brilliant.org](https://brilliant.org/). It's a great way to refine, build, and practice new mathematical concepts. I'm going to do a series of Brillant posts, one every week, on a very specific topic in math. This week, and post number 1, is spherical geometry.

If you want to follow along you can refer to this [wiki](https://brilliant.org/wiki/spherical-geometry/).

## Spherical Geometry

Spherical geometry is the study of objects on a sphere. It's similar to Euclidean geometry in that lines, points, and angles are the main tools for understanding those objects. There are three main differences though: 

1. There are no parallel lines in spherical geometry. In fact, all great circles, which is the plane that intersects the center of mass of the sphere, intersects in two antipodal points, opposite points of the sphere. __Straight lines are great circles__.
2. Angles in a triangle (each side of which is an arc of a great circle) add up to more than 180 degrees.
3. Line segments (arcs of great circles) have bounded length, and regions on the surface of the sphere have bounded area.

## Why learn about spherical geometry? 
If you're interested in understanding angles, areas, and distances on Earth this is a very important field. It's relevant for navigation, cosmology, astronomey, and applications of stereographic projection, think maps (cartography). 

I'll only use numpy to help illustrate some of the properties of spherical geometry and play around with some examples.


```python
import numpy as np
```

## The minimal distance

[The great-circle distance or orthodromic distance is the shortest distance between two points on the surface of the sphere, measured on the the surface of the sphere.](https://en.wikipedia.org/wiki/Great-circle_distance) The distance between two points is therefore $R\phi$, where $R$ is the radius of the sphere and $\phi$ is the measure (in radians) of the central angle subtended by the radii, a line drawn on the surface of sphere by said angle, to the two points.

### Example:
Taking the example from Brilliant: What is the minimal distance on the sphere, centered at the origin and of radius 2, between points $(1, 1, \sqrt{2})$ and $(-1, 1, \sqrt{2})$?

Let's break this down. We received two vectors, $(1, 1, \sqrt{2})$ and $(-1, 1, \sqrt{2})$, our radius is 2, and now we need our equation. There are several version of equations we could use, but to stay consistent with the training material on Brilliant I'll use Vector version:

$d = R\Delta\phi$ \\
$R^{2}\Delta\phi = \cos(v_{1} \cdot v_{2})$

Where $d$ is the distance on the sphere, $R$ is the radius of the sphere, and $v_{1}$ and $v_{2}$ are the normals to the ellipsoid at the two positions 1 and 2. The normals are the perpendicular lines to poisition's tangnet line on the sphere.

Using the vector equation we need to find the [dot product](https://mathworld.wolfram.com/DotProduct.html) of the two vectors. From there we can find the angle, and then the distance using the radius, $R$.


```python
# create two vectors

A = [ 1, 1, np.sqrt(2)]
B = [-1, 1, np.sqrt(2)]

# get the dot product
dot_product = np.dot(A, B)

dot_product
```




    2.0000000000000004




```python
R = 2 # radius
ϕ = np.arccos(dot_product/(R ** 2))

# our angle
print("Our angle is equal to: ", ϕ)
print("This is 1/3 of π: ", np.pi/3)
```

    Our angle is equal to:  1.0471975511965976
    This is 1/3 of π:  1.0471975511965976
    


```python
# therefore, the distance is
Rϕ = R * ϕ

print("The minimal distance given the two vectors is: ", Rϕ)
print("This is equal to 2π/3: ", 2*np.pi/3)
```

    The minimal distance given the two vectors is:  2.0943951023931953
    This is equal to 2π/3:  2.0943951023931953
    


Now that we have a functional example, let's extend this to allow for many points that might come in as vectors.


```python
def spherical_distance_vectors(point_A, point_B, radius):
    dot_product = np.dot(point_A, point_B)
    ϕ = np.arccos(dot_product / (radius ** 2))
    distance = radius * ϕ
    return print("The distance between points", point_A, "and", point_B,"is equal to:", np.round_(distance,3))
```


```python
vectors = 10 * np.random.random_sample((5,3)) # create a matrix (x , 3). I picked 5 by 3.
radius = 20. # set the radius
vectors[:,-1] = np.sqrt(radius) # append the radius to the last column
vectors
```




    array([[7.38566540e-03, 3.24902955e+00, 4.47213595e+00],
           [4.17878062e+00, 6.28529588e+00, 4.47213595e+00],
           [6.42920002e+00, 1.73161261e+00, 4.47213595e+00],
           [8.47919453e+00, 1.00304819e+00, 4.47213595e+00],
           [6.33512133e+00, 6.60878065e+00, 4.47213595e+00]])




```python
from itertools import combinations

combinations = list(combinations(range(5), 2)) # generate a genertic index list to use to get the right points without duplicate analysis

for i in range(len(combinations)):
    spherical_distance_vectors(np.round_(vectors[list(combinations[i])[0]],3), np.round_(vectors[list(combinations[i])[1]],3), radius)
```

    The distance between points [0.007 3.249 4.472] and [4.179 6.285 4.472] is equal to: 29.39
    The distance between points [0.007 3.249 4.472] and [6.429 1.732 4.472] is equal to: 30.131
    The distance between points [0.007 3.249 4.472] and [8.479 1.003 4.472] is equal to: 30.249
    The distance between points [0.007 3.249 4.472] and [6.335 6.609 4.472] is equal to: 29.336
    The distance between points [4.179 6.285 4.472] and [6.429 1.732 4.472] is equal to: 28.518
    The distance between points [4.179 6.285 4.472] and [8.479 1.003 4.472] is equal to: 28.317
    The distance between points [4.179 6.285 4.472] and [6.335 6.609 4.472] is equal to: 26.979
    The distance between points [6.429 1.732 4.472] and [8.479 1.003 4.472] is equal to: 27.58
    The distance between points [6.429 1.732 4.472] and [6.335 6.609 4.472] is equal to: 27.787
    The distance between points [8.479 1.003 4.472] and [6.335 6.609 4.472] is equal to: 27.371
    

### Vector Distance Plotted

This is nice but it could be beneficial to see the distance laid out for us. Luckly, that's doable with matplotlib and this handy work from [stack overflow]("https://stackoverflow.com/questions/11140163/plotting-a-3d-cube-a-sphere-and-a-vector-in-matplotlib").


```python
from mpl_toolkits.mplot3d import Axes3D
import matplotlib.pyplot as plt
from itertools import product, combinations
```


```python
fig = plt.figure(figsize=(10,10))
ax = fig.gca(projection = '3d')

# draw the sphere we want to plot
u, v = np.mgrid[0:2*np.pi:20j, 0:np.pi:10j]
x = 2*np.cos(u)*np.sin(v)
y = 2*np.sin(u)*np.sin(v)
z = 2*np.cos(v)
ax.plot_wireframe(x, y, z, color="r")

# draw a point
ax.scatter([0], [0], [0], color="g", s=100)

# draw a vector
from matplotlib.patches import FancyArrowPatch
from mpl_toolkits.mplot3d import proj3d


class Arrow3D(FancyArrowPatch):

    def __init__(self, xs, ys, zs, *args, **kwargs):
        FancyArrowPatch.__init__(self, (0, 0), (0, 0), *args, **kwargs)
        self._verts3d = xs, ys, zs

    def draw(self, renderer):
        xs3d, ys3d, zs3d = self._verts3d
        xs, ys, zs = proj3d.proj_transform(xs3d, ys3d, zs3d, renderer.M)
        self.set_positions((xs[0], ys[0]), (xs[1], ys[1]))
        FancyArrowPatch.draw(self, renderer)

a = Arrow3D([0, 1], [0, 1], [0, np.sqrt(2)], mutation_scale=20,
            lw=1, arrowstyle="-|>", color="k")
b = Arrow3D([0, -1], [0, 1], [0, np.sqrt(2)], mutation_scale=20,
            lw=1, arrowstyle="-|>", color="k")
ax.add_artist(a)
ax.add_artist(b)
plt.show()
```


![3D-Sphere]({{ site.baseurl }}/assets/img/output-spherical-geometry.png)