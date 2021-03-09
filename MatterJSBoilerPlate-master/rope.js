
display()
{
   var pointA = this.rope.bodyA.position;
   var pointB = this.rope.bodyB.position;

   strokeHeight(2);

   var Anchor1X = pointA.x
   var Anchor1Y = pointA.y
   
   var Anchor2X = pointB.x = this.offsetX;
   var Anchor2Y = pointB.y = this.offsetY;

   line 1(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y)
   line 2(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y)
   line 3(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y)
   line 4(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y)

   constraint = 200, 30;
}