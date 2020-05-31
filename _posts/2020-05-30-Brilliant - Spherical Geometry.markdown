---
layout: post
title: "Brilliant.org: Spherical Geometry"
date: 2020-05-30 17:30:20 +0300
description: An introduction to Spherical Geometry
img:  Triangles_spherical_geometry.jpg
tag: ['Math','Geometry','Linear Algebra']
---
I'm quiet the avid proponent of [Brilliant.org](https://brilliant.org/). It's a great way to refine, build, and practice new mathematical concepts. I'm going to do a series of Brillant posts, one every week, on a very specific topic in math. This week, and post number 1, is spherical geometry.

If you want to follow along you can refer to this [wiki](https://brilliant.org/wiki/spherical-geometry/).

## Spherical Geometry

Spherical geometry is the study of objects on a sphere. It's similar to Euclidean geometry in that lines, points, and angles are the main tools for understanding those objects. There are three main differences though: 

1. There are no parallel lines in spherical geometry. In fact, all great circles, which is the plane that intersects the center of mass of the sphere, intersects in two antipodal points, opposite points of the sphere. See picture below. Straight lines are great circles.
2. Angles in a triangle (each side of which is an arc of a great circle) add up to more than 180 degrees.
3. Line segments (arcs of great circles) have bounded length, and regions on the surface of the sphere have bounded area.

### Why learn about spherical geometry? 
If you're interested in understanding angles, areas, and distances on Earth this is a very important field. It's relevant for navigation, cosmology, astronomey, and applications of stereographic projection, think maps (cartography). 

I'll only use numpy to help illustrate some of the properties of spherical geometry and play around with some examples.


```python
import numpy as np
```

### The minimal distance
{% katexmm %}
[The great-circle distance or orthodromic distance is the shortest distance between two points on the surface of the sphere, measured on the the surface of the sphere.](https://en.wikipedia.org/wiki/Great-circle_distance) The distance between two points is therefore $R\phi$, where $R$ is the radius of the sphere and $\phi$ is the measure (in radians) of the central angle subtended by the radii, a line drawn on the surface of sphere by said angle, to the two points.

#### Example:

Taking the example from Brilliant: What is the minimal distance on the sphere, centered at the origin and of radius 2, between points $(1, 1, \sqrt{2})$ and $(-1, 1, \sqrt{2})$?

Let's break this down. We received two vectors, $(1, 1, \sqrt{2})$ and $(-1, 1, \sqrt{2})$, our radius is 2, and now we need our equation. There are several version of equations we could use, but to stay consistent with the training material on Brilliant I'll use Vector version:
{% endkatexmm %}

{% katexmm %}
$d = R\Delta\phi \\n
R^{2}\Delta\phi = \cos(n_{1} \cdot n_{2} \cdot n_{3})$
{% endkatexmm %}

{% katexmm %}
Where $d$ is the distance on the sphere, $R$ is the radius of the sphere, and $n_{1}$, $n_{2}$, and $n_{3}$ are the normals to the ellipsoid at the two positions 1 and 2. The normals are the perpendicular lines to poisition's tangnet line on the sphere. $n_{3}$ is the square root of the radius, denoting the length to the tangent line.

Using the vector equation we need to find the [dot product](https://mathworld.wolfram.com/DotProduct.html) of the two vectors. From there we can find the angle, and then the distance using the radius, $R$.
{% endkatexmm %}

```python
# set up the matrix

A = [ 1, 1, np.sqrt(2)]
B = [-1, 1, np.sqrt(2)]

# get the dot product
dot_product = np.dot(A, B)

print(dot_product)
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
    return print("The distance between points ", point_A, " and ", point_B," is equal to: ", distance)
```


```python
vectors = 10 * np.random.random_sample((5,3)) # create a matrix (x , 3). I picked 5 by 3.
radius = 20. # set the radius
vectors[:,-1] = np.sqrt(radius) # append the radius to the last column
vectors
```




    array([[0.97650983, 9.49586762, 4.47213595],
           [2.44788589, 6.97879146, 4.47213595],
           [6.97401817, 6.24361927, 4.47213595],
           [7.81830762, 8.45201872, 4.47213595],
           [1.77762095, 4.22570549, 4.47213595]])




```python
from itertools import combinations

combinations = list(combinations(range(5), 2)) # generate a genertic index list to use to get the right points without duplicate analysis

for i in range(len(combinations)):
    spherical_distance_vectors(vectors[list(combinations[i])[0]], vectors[list(combinations[i])[1]], radius)
```

    The distance between points  [0.97650983 9.49586762 4.47213595]  and  [2.44788589 6.97879146 4.47213595]  is equal to:  26.94579853707037
    The distance between points  [0.97650983 9.49586762 4.47213595]  and  [6.97401817 6.24361927 4.47213595]  is equal to:  27.07703256374968
    The distance between points  [0.97650983 9.49586762 4.47213595]  and  [7.81830762 8.45201872 4.47213595]  is equal to:  25.953575051759703
    The distance between points  [0.97650983 9.49586762 4.47213595]  and  [1.77762095 4.22570549 4.47213595]  is equal to:  28.310331106013393
    The distance between points  [2.44788589 6.97879146 4.47213595]  and  [6.97401817 6.24361927 4.47213595]  is equal to:  27.355872187712514
    The distance between points  [2.44788589 6.97879146 4.47213595]  and  [7.81830762 8.45201872 4.47213595]  is equal to:  26.459178739412458
    The distance between points  [2.44788589 6.97879146 4.47213595]  and  [1.77762095 4.22570549 4.47213595]  is equal to:  28.715643649502418
    The distance between points  [6.97401817 6.24361927 4.47213595]  and  [7.81830762 8.45201872 4.47213595]  is equal to:  24.938467908836166
    The distance between points  [6.97401817 6.24361927 4.47213595]  and  [1.77762095 4.22570549 4.47213595]  is equal to:  28.466201476996797
    The distance between points  [7.81830762 8.45201872 4.47213595]  and  [1.77762095 4.22570549 4.47213595]  is equal to:  27.91742570780185
    

With that, I'm going to call it. I covered how to use vectors to find the distances between two points on a sphere. We then extended that example to a function to use for any situation.
